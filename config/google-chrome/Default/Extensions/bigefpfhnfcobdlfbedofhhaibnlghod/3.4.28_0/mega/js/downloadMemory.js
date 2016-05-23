function MemoryIO(dl_id, dl) {
    var dblob, offset = 0, logger,
        msie = typeof MSBlobBuilder === 'function'

    if (d) {
        console.log('Creating new MemoryIO instance', dl_id, dl);
    }

    this.write = function(buffer, position, done) {
        try {
            if (msie) {
                dblob.append(have_ab ? buffer : buffer.buffer);
            }
            else {
                dblob.push(new Blob([buffer]));
            }
        }
        catch (e) {
            dlFatalError(dl, e);
        }
        offset += (have_ab ? buffer : buffer.buffer).length;
        buffer = null;
        Soon(done);
    };

    this.download = function(name, path) {
        var blob = this.getBlob();
        this.completed = true;

        if (is_chrome_firefox) {
            requestFileSystem(0, blob.size, function(fs) {
                var opt = {
                    create: !0,
                    fxo: dl
                };
                fs.root.getFile(dl_id, opt, function(fe) {
                    fe.createWriter(function(fw) {
                        fw.onwriteend = fe.toURL.bind(fe);
                        fw.write(blob);
                    });
                });
            });
        }
        else if (msie) {
            navigator.msSaveOrOpenBlob(blob, name);
        }
        else {
            var blob_url = myURL.createObjectURL(blob);
            var dlLinkNode = document.getElementById('dllink');
            dlLinkNode.download = name;
            dlLinkNode.href = blob_url;
            dlLinkNode.click();
            Later(function() {
                myURL.revokeObjectURL(blob_url);
                blob_url = undefined;
            });
        }

        this.abort();
    };

    this.setCredentials = function(url, size, filename, chunks, sizes) {
        if (d) {
            logger = new MegaLogger('MemoryIO', {}, dl.writer.logger);
            logger.info('MemoryIO Begin', dl_id, Array.prototype.slice.call(arguments));
        }
        if (size > MemoryIO.fileSizeLimit) {
            dlFatalError(dl, Error('File too big to be reliably handled in memory.'));
            if (!this.is_zip) {
                ASSERT(!this.begin, "This should have been destroyed 'while initializing'");
            }
        }
        else {
            dblob = msie ? new MSBlobBuilder() : [];
            this.begin();
        }
    };

    this.abort = function() {
        if (dblob) {
            if (msie && !this.completed) {
                try {
                    // XXX: how to force freeing up the blob memory?
                    dblob = dblob.getBlob();
                }
                catch (e) {}
            }
            dblob = undefined;
        }
    };

    this.getBlob = function() {
        return msie ? dblob.getBlob() : new Blob(dblob);
    };
}

MemoryIO.usable = function() {
    MemoryIO.fileSizeLimit = localStorage.dlFileSizeLimit || (1024 * 1024 * 1024 * (1 + browserdetails(ua).is64bit));
    return navigator.msSaveOrOpenBlob || "download" in document.createElementNS("http://www.w3.org/1999/xhtml", "a");
};
