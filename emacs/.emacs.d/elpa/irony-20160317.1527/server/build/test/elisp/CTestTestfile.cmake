# CMake generated Testfile for 
# Source directory: C:/Users/zakla/AppData/Roaming/.emacs.d/elpa/irony-20160317.1527/server/test/elisp
# Build directory: C:/Users/zakla/AppData/Roaming/.emacs.d/elpa/irony-20160317.1527/server/build/test/elisp
# 
# This file includes the relevant testing commands required for 
# testing this directory and lists subdirectories to be tested as well.
add_test(check-irony-el "C:/Emacs/bin/emacs.exe" "-batch" "-l" "package" "--eval" "(package-initialize) (unless (require 'cl-lib nil t) (package-refresh-contents) (package-install 'cl-lib))" "-l" "C:/Users/zakla/AppData/Roaming/.emacs.d/elpa/irony-20160317.1527/server/test/elisp/irony.el" "-f" "ert-run-tests-batch-and-exit")
add_test(check-irony-cdb-json-el "C:/Emacs/bin/emacs.exe" "-batch" "-l" "package" "--eval" "(package-initialize) (unless (require 'cl-lib nil t) (package-refresh-contents) (package-install 'cl-lib))" "-l" "C:/Users/zakla/AppData/Roaming/.emacs.d/elpa/irony-20160317.1527/server/test/elisp/irony-cdb-json.el" "-f" "ert-run-tests-batch-and-exit")
