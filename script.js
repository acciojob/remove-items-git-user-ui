//your JS code here. If required.
function removeColor() {
    const select = document.getElementById("colorSelect");

    // Remove the currently selected option
    select.remove(select.selectedIndex);
}