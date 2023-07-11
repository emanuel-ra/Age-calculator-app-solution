const { getDateDiffInYMD } = require('../utils/helpers')

test('Calculate date diff years, months and days', ()=>{

    const startDate = new Date('2022-10-01');
    const endDate = new Date('2023-12-27');
    const result = getDateDiffInYMD(startDate, endDate); 

    expect(result).toMatchObject( { years:1, months:2, days:27 })
})


test('Empty values', ()=>{    
    const result = getDateDiffInYMD('', ''); 
    expect(result).toMatchObject( { years:0, months:0, days:0 })
})
