const tim = {
    createdAt: '01/01/2022',
    updatedAt: '01/01/2022',
    age: 24,
    data: {
        name: 'Tim',
        job: 'Security'
    }
};
const jack = {
    createdAt: '01/01/2022',
    updatedAt: '01/01/2022',
    data: {
        name: 'Jack',
        job: 'Receptionist'
    }
};
const anna = {
    createdAt: new Date(),
    updatedAt: new Date(),
    data: {
        name: 'Anna',
        manages: [tim, jack]
    }
};
;
export {};
