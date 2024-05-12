<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD033 -->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![pre-commit][pre-commit-shield]][pre-commit-url]
[![renovate][renovate-shield]][renovate-dashboard-url]
[![taskfile][taskfile-shield]][taskfile-url]

# renovate-config

Central renovate configuration presets

Thanks to [bjw-s](https://github.com/bjw-s/renovate-config/commits?author=bjw-s), used his repo as a starting point

## (experimental) build

I have created a simple node zx script to merge all json5 files of a given preset into 1 file.
The idea of this script is to later provide single file entrypoints (mostly for debugging purpose)
It require your system to have nodejs and npm installed.

Other dependencies get intalled in runtime.

```console
npx --yes zx --install scripts/build.mjs --preset flux-infra.json5
```

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[pre-commit-url]: https://github.com/pre-commit/pre-commit
[pre-commit-shield]: https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&style=for-the-badge
[renovate-dashboard-url]: https://app.renovatebot.com/dashboard#github/tyriis/flux.k3s.cluster
[renovate-shield]: https://img.shields.io/badge/renovate-enabled-brightgreen?logo=renovatebot&style=for-the-badge
[taskfile-url]: https://taskfile.dev/
[taskfile-shield]: https://img.shields.io/badge/taskfile-enabled-brightgreen?logo=task&style=for-the-badge
