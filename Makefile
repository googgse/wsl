.POSIX:
SHELL := /bin/bash
GO := $(shell which go)
NODE := $(shell which node)
# Format the code
fmt:
	@echo -e "\033[32mFormatting the code...\033[0m"
	$(GO) fmt ./...
	@echo -e "\033[32mFormatting finished.\033[0m"
# Lint the code
lint:
	@echo -e "\033[32mLinting the code...\033[0m"
	$(GO) vet ./...
	@echo -e "\033[32mLinting finished.\033[0m"
# Git tag
tag:
	@${NODE} ./scripts/tag.mjs
