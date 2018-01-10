
function setupButtons(studyViewer) {
    // Get the button elements
    var buttons = $(studyViewer).find('button');

    // Tool button event handlers that set the new active tool

    // WW/WL
    $(buttons[0]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            cornerstoneTools.wwwc.activate(element, 1);
            cornerstoneTools.wwwcTouchDrag.activate(element);
        });
    });

    // Invert
    $(buttons[1]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            var viewport = cornerstone.getViewport(element);
            // Toggle invert
            if (viewport.invert === true) {
                viewport.invert = false;
            } else {
                viewport.invert = true;
            }
            cornerstone.setViewport(element, viewport);
        });
    });

    // Zoom
    $(buttons[2]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            // 5 is right mouse button and left mouse button
            cornerstoneTools.zoom.activate(element, 5);
            cornerstoneTools.zoomTouchDrag.activate(element);
        });
    });

    // Pan
    $(buttons[3]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            // 3 is middle mouse button and left mouse button
            cornerstoneTools.pan.activate(element, 3);
            cornerstoneTools.panTouchDrag.activate(element);
        });
    });

    // Stack scroll
    $(buttons[4]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            cornerstoneTools.stackScroll.activate(element, 1);
            cornerstoneTools.stackScrollTouchDrag.activate(element);
        });
    });

    // Length measurement
    $(buttons[5]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            cornerstoneTools.length.activate(element, 1);
        });
    });

    // Freehand ROI draw
    $(buttons[7]).on('click touchstart', function() {
        forEachViewport(function(element) {
            cornerstoneTools.freehand.activate(element, 1);
        });
    });

    // JSON save
    $(buttons[8]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            var toolData = cornerstoneTools.getToolState(element, 'freehand')
            if (toolData === undefined) {
                return;
            }

            var stack = studyViewer.roiData.stacks[studyViewer.roiData.currentStack];
            stack.freehand = toolData.data;

            console.log(studyViewer.roiData)

            // save json
            download(studyViewer.roiData, 'test.json', 'application/octet-stream');
        });
    });

    // Tooltips
    $(buttons[0]).tooltip();
    $(buttons[1]).tooltip();
    $(buttons[2]).tooltip();
    $(buttons[3]).tooltip();
    $(buttons[4]).tooltip();
    $(buttons[5]).tooltip();
    $(buttons[7]).tooltip();
    $(buttons[8]).tooltip();

    function download(data, name, type) {
        var link = document.createElement("a");
        var data = encode( JSON.stringify(data, null, 4) );
        var blob = new Blob( [ data ], {
            type: 'application/octet-stream'
        });
        var url = new Blob([text], {type: type});

        link.setAttribute( 'href', url );
        link.setAttribute( 'download', name );

        var event = document.createEvent( 'MouseEvents' );
        event.initMouseEvent( 'click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
        link.dispatchEvent( event );
    }
};
