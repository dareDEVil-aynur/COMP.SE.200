# COMP.CS.200 Course Source Code

Welcome to the COMP.CS.200 course project repository.

---

## Authors
- **Aynur Rahman Talukdar**
- **Lauri Lehtonen**

---

## Getting Started

Follow these instructions to run the project, execute tests locally, and generate coverage reports.

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 18.x or higher)
- **npm** (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dareDEVil-aynur/COMP.SE.200.git
   cd COMP.SE.200
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Running Tests Locally

To run all tests using Mocha, simply execute:
```bash
npm test
```

---

## Generating Coverage Reports Locally

To generate a code coverage report locally using NYC:
```bash
npm run coverage
```

The coverage report will be displayed in the terminal.

To generate a detailed LCOV report for Coveralls:
```bash
npm run coverage-report
```

This will generate a `coverage.lcov` file and upload it to Coveralls.

---

## GitHub Actions CI/CD Workflow

This repository is set up with a GitHub Actions workflow to:
1. Run tests on every push or pull request to the `main` branch.
2. Generate code coverage reports.
3. Upload the coverage data to Coveralls.

The status of your repository's code coverage can be seen in the Coveralls badge below.

### Coveralls Badge
[![Coverage Status](https://coveralls.io/repos/github/dareDEVil-aynur/COMP.SE.200/badge.svg?branch=main)](https://coveralls.io/github/dareDEVil-aynur/COMP.SE.200?branch=main&kill_cache=1)

