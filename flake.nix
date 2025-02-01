{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    nixpkgs,
    flake-utils,
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {
        inherit system;
        config.allowUnfree = true; # Allow non-free packages for development
      };
    in {
      devShell = pkgs.mkShell {
        buildInputs = with pkgs; [
          deno
          vscode-extensions.denoland.vscode-deno
          zsh
        ];

        shellHook = ''
          echo "Development environment ready!"
          export PATH=$PATH:$HOME/.local/bin
          exec zsh
        '';
      };
    });
}
