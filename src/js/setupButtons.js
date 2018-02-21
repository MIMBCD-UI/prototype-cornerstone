
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
    $(buttons[6]).on('click touchstart', function() {
        forEachViewport(function(element) {
            cornerstoneTools.freehand.activate(element, 1);
        });
    });

    // Tooltips
    $(buttons[0]).tooltip();
    $(buttons[1]).tooltip();
    $(buttons[2]).tooltip();
    $(buttons[3]).tooltip();
    $(buttons[4]).tooltip();
    $(buttons[5]).tooltip();
    $(buttons[8]).tooltip();

};





