@echo off
REM 保存当前目录
set CUR_DIR=%CD%

REM 进入 src 目录
cd /d "%CUR_DIR%\src"

REM 执行 build 命令
poetry run mkdocs serve --livereload --open

REM 暂停，显示输出
pause