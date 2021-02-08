
function solve(area, vol, jsonInput) {
    const objArr = JSON.parse(jsonInput);
    return objArr.map(obj => {
        const a = Math.abs(area.call(obj));
        const b = Math.abs(vol.call(obj));
        return { area: a, volume: b };
    });
}
