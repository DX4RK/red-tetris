import sys
import json
import shutil
from pathlib import Path

STATE_FILE = Path("/tmp/.mycli_progress_state.json")
BAR_WIDTH = 40

GREEN = "\033[92m"
DIM = "\033[90m"
BOLD = "\033[1m"
RESET = "\033[0m"
CLEAR_LINE = "\033[2K"


def draw(label: str, current: int, total: int):
    filled = int(BAR_WIDTH * current / total) if total else BAR_WIDTH
    filled = min(filled, BAR_WIDTH)
    bar = f"{GREEN}{'━' * filled}{RESET}{DIM}{'━' * (BAR_WIDTH - filled)}{RESET}"
    pct = int(100 * current / total) if total else 100
    line = f"{BOLD}{GREEN}{label:<12}{RESET} {bar} {pct:>3}%"
    sys.stdout.write(f"\r{CLEAR_LINE}{line}")
    sys.stdout.flush()


def cmd_init():
    label = sys.argv[2] if len(sys.argv) > 2 else "Progress"
    total = int(sys.argv[3]) if len(sys.argv) > 3 else 1
    STATE_FILE.write_text(json.dumps({"label": label, "total": total, "current": 0}))
    draw(label, 0, total)


def cmd_step():
    if not STATE_FILE.exists():
        sys.stdout.write("No active progress — run 'init' first.\n")
        sys.exit(1)
    state = json.loads(STATE_FILE.read_text())
    state["current"] = min(state["current"] + 1, state["total"])
    STATE_FILE.write_text(json.dumps(state))
    draw(state["label"], state["current"], state["total"])


def cmd_done():
    if not STATE_FILE.exists():
        sys.stdout.write("No active progress to finish.\n")
        sys.exit(1)
    state = json.loads(STATE_FILE.read_text())
    draw(state["label"], state["total"], state["total"])
    sys.stdout.write(f"  {BOLD}{GREEN}\u2713{RESET}\n")  # newline + checkmark
    sys.stdout.flush()
    STATE_FILE.unlink(missing_ok=True)


COMMANDS = {"init": cmd_init, "step": cmd_step, "done": cmd_done}

if __name__ == "__main__":
    if len(sys.argv) < 2 or sys.argv[1] not in COMMANDS:
        sys.stdout.write("Usage: progress.py [init <label> <total> | step | done]\n")
        sys.exit(1)
    COMMANDS[sys.argv[1]]()
