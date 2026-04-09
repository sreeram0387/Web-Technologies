const fs = require('fs');

const fileName = 'sample.txt';

fs.writeFile(fileName, 'This is the initial content.\n', (err) => {
    if (err) {
        console.log('Error creating file:', err);
        return;
    }

    console.log('File created successfully.');

    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }

        console.log('File content:\n' + data);

        fs.appendFile(fileName, 'This content is appended.\n', (err) => {
            if (err) {
                console.log('Error appending file:', err);
                return;
            }

            console.log('Content appended successfully.');

            fs.readFile(fileName, 'utf8', (err, updatedData) => {
                if (err) {
                    console.log('Error reading updated file:', err);
                    return;
                }

                console.log('Updated content:\n' + updatedData);

                fs.unlink(fileName, (err) => {
                    if (err) {
                        console.log('Error deleting file:', err);
                        return;
                    }

                    console.log('File deleted successfully.');
                });
            });
        });
    });
});
