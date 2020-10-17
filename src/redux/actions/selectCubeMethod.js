export const type = 'selectCubeMethod';

const selectCubeMethod = (methodId) => ({
    type,
    payload: methodId,
});

export default selectCubeMethod;
