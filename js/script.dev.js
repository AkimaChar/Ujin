const canvas = document.querySelector('.canvas');
let create_tool_elem;
let target_tool_tool = undefined;

canvas.addEventListener('pointerdown', () => {
    if (target_tool_tool != undefined) {
        drawBlock();
    }
})

function drawBlock() {
    create_tool_elem = document.createElement(target_tool_tool);
    create_tool_elem.style.position = 'absolute';
    canvas.append(create_tool_elem);
    switch (target_tool_tool) {
        case 'button':
            create_tool_elem.innerText = target_tool_tool;
            break;
        case 'input':
            create_tool_elem.setAttribute('placeholder', 'Text...');
            break;
    }
    create_tool_elem.style.top = (event.layerY - (create_tool_elem.offsetHeight * 0.5)) + 'px';
    create_tool_elem.style.left = (event.layerX - (create_tool_elem.offsetWidth * 0.5)) + 'px';

    target_tool_tool = undefined;
}
document.querySelectorAll('.tool-item').forEach(el => {
    el.addEventListener('pointerup', () => {
        target_tool_tool = el.id;
        console.log('Set tool "' + target_tool_tool + '"');
    })
});

