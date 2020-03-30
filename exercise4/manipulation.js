function update() {
    let borderColor = document.getElementById('inputBorderColor');
    let borderWidth = document.getElementById('inputBorderWidth');
    let backgroundColor = document.getElementById('inputBackgroundColor');
    let paragraph = document.getElementById('paragraph');

    if (borderColor.value)
    {
        paragraph.style.borderStyle = "solid";
        if (borderColor.value.startsWith("#"))
            paragraph.style.borderColor = borderColor.value;
        else
            paragraph.style.borderColor = "#" + borderColor.value;
    }
    else
       paragraph.style.borderStyle = null;
    if (borderWidth.value)
    {
        paragraph.style.borderStyle = "solid";
        if (borderWidth.value.endsWith("px"))
            paragraph.style.borderWidth = borderWidth.value;
        else
            paragraph.style.borderWidth = borderWidth.value + "px";
    }
    else
       paragraph.style.borderWidth = "0px";
    if (backgroundColor.value)
    {
        if (borderColor.value.startsWith("#"))
            paragraph.style.backgroundColor = backgroundColor.value;
        else
            paragraph.style.backgroundColor = "#" + backgroundColor.value;
    }
    else
       paragraph.style.backgroundColor = "#ffffff";
}