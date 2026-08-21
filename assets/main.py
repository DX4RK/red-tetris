import subprocess
import time
import typer
from rich.progress import Progress, BarColumn, TextColumn, TimeElapsedColumn

app = typer.Typer(
    name="mycli",
    help="Wrap and run your Makefile targets with a nicer CLI.",
    no_args_is_help=True,
)

HEADER = r"""
  ___  _______   ___________________  ________
 / _ \/ __/ _ \ /_  __/ __/_  __/ _ \/  _/ __/
/ , _/ _// // /  / / / _/  / / / , _// /_\ \
/_/|_/___/____/__/_/ /___/ /_/ /_/|_/___/___/
             /___/
"""





def run_with_progress(label: str, command: list[str]):
    """Run a shell command while showing a rich progress bar."""
    with Progress(
        TextColumn("[bold green]{task.description}"),
        BarColumn(bar_width=40, style="green", complete_style="bright_green"),
        TextColumn("[progress.percentage]{task.percentage:>3.0f}%"),
        TimeElapsedColumn(),
    ) as progress:
        task = progress.add_task(label, total=100)

        process = subprocess.Popen(
            command, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True
        )

        # Fake-but-smooth progress while the real process runs in the background.
        # Swap this for real percentage parsing if your build tool prints one.
        while process.poll() is None:
            if progress.tasks[0].completed < 90:
                progress.update(task, advance=2)
            time.sleep(0.1)

        progress.update(task, completed=100)
        process.wait()

    if process.returncode != 0:
        typer.secho(f"✗ {label} failed (exit {process.returncode})", fg=typer.colors.RED)
        raise typer.Exit(code=process.returncode)
    typer.secho(f"✓ {label} complete", fg=typer.colors.GREEN)


@app.command()
def build():
    """Run 'make build'."""
    run_with_progress("Building", ["make", "build"])


@app.command()
def test():
    """Run 'make test'."""
    run_with_progress("Testing", ["make", "test"])


@app.command()
def clean():
    """Run 'make clean'."""
    run_with_progress("Cleaning", ["make", "clean"])


if __name__ == "__main__":
    typer.secho(HEADER, fg=typer.colors.RED, bold=True)
    app()
