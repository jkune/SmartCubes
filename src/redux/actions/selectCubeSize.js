export const type = 'selectCubeSize';

const selectCubeSize = (sizeId) => ({
    type,
    payload: sizeId,
});

export default selectCubeSize;
