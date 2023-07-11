const getDateDiffInYMD = (startDate, endDate) =>
{
    const regExp = /^\d{4}-\d{2}-\d{2}$/
    if(startDate==='' || endDate===''){
        return { years:0, months:0, days:0 }
    }
    
    const oneDayMs = 1000 * 60 * 60 * 24;
    const diffMs = endDate.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffMs / oneDayMs);
    const years = Math.floor(diffDays / 365);
    const months = Math.floor(diffDays / 30.44) % 12;
    const days = diffDays - (years * 365) - (Math.floor(months * 30.44));
    
    return { years, months, days };
}

module.exports = {
    getDateDiffInYMD
}