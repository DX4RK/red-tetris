set -x PNPM_HOME /home/noldiane/.local/share/pnpm

if not string match -q -- "*$PNPM_HOME/bin*" $PATH
    set -x PATH $PNPM_HOME/bin $PATH
end
