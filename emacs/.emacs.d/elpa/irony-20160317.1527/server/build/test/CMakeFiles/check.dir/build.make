# CMAKE generated file: DO NOT EDIT!
# Generated by "MinGW Makefiles" Generator, CMake Version 3.5

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

SHELL = cmd.exe

# The CMake executable.
CMAKE_COMMAND = "C:\Program Files (x86)\CMake\bin\cmake.exe"

# The command to remove a file.
RM = "C:\Program Files (x86)\CMake\bin\cmake.exe" -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = C:\Users\zakla\AppData\Roaming\.emacs.d\elpa\irony-20160317.1527\server

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = C:\Users\zakla\AppData\Roaming\.emacs.d\elpa\irony-20160317.1527\server\build

# Utility rule file for check.

# Include the progress variables for this target.
include test/CMakeFiles/check.dir/progress.make

test/CMakeFiles/check:
	cd /d C:\Users\zakla\AppData\Roaming\.emacs.d\elpa\irony-20160317.1527\server\build\test && "C:\Program Files (x86)\CMake\bin\ctest.exe" --output-on-failure

check: test/CMakeFiles/check
check: test/CMakeFiles/check.dir/build.make

.PHONY : check

# Rule to build all files generated by this target.
test/CMakeFiles/check.dir/build: check

.PHONY : test/CMakeFiles/check.dir/build

test/CMakeFiles/check.dir/clean:
	cd /d C:\Users\zakla\AppData\Roaming\.emacs.d\elpa\irony-20160317.1527\server\build\test && $(CMAKE_COMMAND) -P CMakeFiles\check.dir\cmake_clean.cmake
.PHONY : test/CMakeFiles/check.dir/clean

test/CMakeFiles/check.dir/depend:
	$(CMAKE_COMMAND) -E cmake_depends "MinGW Makefiles" C:\Users\zakla\AppData\Roaming\.emacs.d\elpa\irony-20160317.1527\server C:\Users\zakla\AppData\Roaming\.emacs.d\elpa\irony-20160317.1527\server\test C:\Users\zakla\AppData\Roaming\.emacs.d\elpa\irony-20160317.1527\server\build C:\Users\zakla\AppData\Roaming\.emacs.d\elpa\irony-20160317.1527\server\build\test C:\Users\zakla\AppData\Roaming\.emacs.d\elpa\irony-20160317.1527\server\build\test\CMakeFiles\check.dir\DependInfo.cmake --color=$(COLOR)
.PHONY : test/CMakeFiles/check.dir/depend

