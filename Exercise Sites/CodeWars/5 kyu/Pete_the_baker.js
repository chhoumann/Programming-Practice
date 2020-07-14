function cakes(recipe, available) {
    const res = Math.floor(Math.min(...Object.keys(recipe).map(ing => { return available[ing] / recipe[ing] })));
    return res ? res : 0;
}