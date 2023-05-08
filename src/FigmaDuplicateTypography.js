
// BEGIN PLUGIN SCRIPT
const eduNSWACTFonts = [{
    name: 'Edu NSW ACT Foundation',
    types: [ 'VariableFont_wght', 'Bold', 'Medium', 'Regular', 'SemiBold' ]
}];

const cloneSelection = (selection) => {
    // console.log("selection", selection);
    // if selection or target is empty
    if(!selection.length) return;
    const clonedSelections = selection.map(selection => selection.clone());
    return clonedSelections;
}
const setFont = async(textNode, {fontName, fontStyle,...rest}) => {
    // replace with the style of the font you want to load
    console.log("fontName, fontStyle", fontName, fontStyle);
    try {
        const originalSkipInvisibleInstanceChildrenSetting = figma.skipInvisibleInstanceChildren;
        figma.skipInvisibleInstanceChildren = true;

        const font = { family: fontName, style: fontStyle };
        await figma.loadFontAsync(font);

        textNode.fontName = font;

        figma.skipInvisibleInstanceChildren = originalSkipInvisibleInstanceChildrenSetting;
    } catch (error) {
        console.log("Error:", error);
    }
}
const addToParent = async(parentNode, newChildNode) => {
    console.log("parentNode, newChildNode", parentNode, newChildNode);
    console.log("parentNode.length, newChildNode.length", parentNode.length, newChildNode.length);
    try {
        const originalSkipInvisibleInstanceChildrenSetting = figma.skipInvisibleInstanceChildren;
        figma.skipInvisibleInstanceChildren = true;
        if(!parentNode) {
            throw new Error("Please select a parent node");
        }

        const parentNodeId = parentNode.id;
        const index = parentNode.children.length;

        // Check if the parent is a Frame, and if so, set the position of the node to 0,0
        if (parentNode.type === "FRAME") {
            newChildNode.x = 0;
            newChildNode.y = 0;
        }

        // Move the node to the new parent
        parentNode.appendChild(newChildNode);
        newChildNode.parent = figma.getNodeById(parentNodeId);
        figma.skipInvisibleInstanceChildren = originalSkipInvisibleInstanceChildrenSetting;
    } catch (error) {
        console.log("Error:", error);
    }
};
const updateClones = async (fonts) => {
    try {
        const originalSkipInvisibleInstanceChildrenSetting = figma.skipInvisibleInstanceChildren;
        figma.skipInvisibleInstanceChildren = true;
        const currentSelection = figma.currentPage.selection;
        const selectionParent = currentSelection[0].parent;

        const updatedClones = await Promise.all(fonts.map(async (font) => {
            const clonedSelections = cloneSelection(currentSelection);
            console.log("clonedSelections", clonedSelections);
            clonedSelections[0].name = `${font.name}--${font.type}`;
            const headingContainer = clonedSelections[0].findOne(node => {
                console.log("node.name", node.name);
                return  node.name === "HeadingContainer"
            });
            console.log("headingContainer", headingContainer);
            const textNodes = headingContainer?.findAllWithCriteria({ types: ['TEXT'] });

            textNodes.forEach(textNode => {
                setFont(textNode, {fontName: font.name, fontStyle: font.type});
            });

            await addToParent(selectionParent, clonedSelections[0]);
            return clonedSelections;
        }));

        figma.skipInvisibleInstanceChildren = originalSkipInvisibleInstanceChildrenSetting;

        return updatedClones;
    } catch (error) {
        console.log("Error:", error);
    }
};
const eduFontsSeparatedByType = eduNSWACTFonts[0].types.map(type => {
    return {name: eduNSWACTFonts[0].name, type: type};
});
const changeNameOfChildren = (selection) => {
    selection.forEach(node => {
        if(node.children) {
            node.children.forEach(child => {
                const newChildName = child.name.slice(child.name.indexOf("--") + 2, child.name.length);

                child.name = newChildName;
            });
        }
    });
}
changeNameOfChildren(figma.currentPage.selection);
const updatedClones = updateClones(eduFontsSeparatedByType);
console.log("updatedClones",updatedClones);

// END OF PLUGIN SCRIPT
