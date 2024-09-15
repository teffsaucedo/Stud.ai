
function checkUrl() {


    return window.location.href.includes ('canvas');
}

function isCanvasAssignmentCreationPage() {

    console.log("WENT THROUGH ASSIGNMENT CREATION PAGE")
    console.log(window.location.href.includes('/assignments'))
    console.log(window.location.href.includes('/edit'))
    console.log(window.location.href.includes('/new'))

    return window.location.href.includes('/assignments') && (window.location.href.includes('/new') || (window.location.href.includes('/edit')));


}

function isCanvasAssignmentViewPage() {
    return window.location.href.includes("/assignments") && (!window.location.href.endsWith('/assignments'));

}


function main() {




    if (!checkUrl()) {
        console.error('This is not a Canvas assignment creation page.');
        return;
    }


    // Create a new div element with your content
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <div>Estimate Time</div>
    `;





    if (isCanvasAssignmentCreationPage()) {

        newDiv.id = 'studai-canvas-button-2';
        const targetElement = document.querySelector('#edit_assignment_header > div.header-bar.assignment-edit-header > div');


        console.error("ELEMENT LOADED")
        console.error(targetElement)


        console.error(document.documentElement.outerHTML);

        if (targetElement) {

            targetElement.insertBefore(newDiv, targetElement.firstChild);

        } else {
            console.error('1: Target element not found.');
        }
    }
    else if (isCanvasAssignmentViewPage()) {
        
        newDiv.id = 'studai-canvas-button-3';
        const targetElement = document.querySelector('#assignment_show > div.assignment-title > div.assignment-buttons');


        // Check if the target element exists before appending
        if (targetElement) {
            // Get the second-to-last child of the target element
            const children = targetElement.children;
            const secondToLastChild = children[children.length - 2];

            // Check if there is at least two children
            if (secondToLastChild) {
                // Insert the new element before the second-to-last child
                targetElement.insertBefore(newDiv, secondToLastChild);
            } else {
                // If there are fewer than two children, append to the end
                targetElement.appendChild(newDiv);
            }
        } else {
            console.error('2: Target element not found.');
        }
    }
    else {
        console.error('all cases passed, no match');
        return;
    }




}


console.log("running?")
window.addEventListener('load', main);


console.log("ran?")
