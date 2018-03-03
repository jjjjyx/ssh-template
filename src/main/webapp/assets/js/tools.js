



// export default utils;

define(function () {
    class Utils {
        /**
         *
         * @param  {Point} p1
         * @param  {Point} p2
         * @return {Vector}
         */
        getDistance(p1, p2) {
            let dx = p1.x - p2.x;
            let dy = p1.y - p2.y;
            // console.log(dx,dy)
            let ds = Math.sqrt(dx * dx + dy * dy);
            return ds
        }

        eventFromPoint(e, to = 'offset') {
            return {
                x:e[`${to}X`],
                y:e[`${to}Y`]
            };
        }
    }


    const utils = new Utils();
    return utils;
});