// Using values provided through constants (includes/constants.js)
function customerSegment(column) {
    return `
        CASE
            WHEN ${column} > ${constants.platinum_threshold} THEN "platinum"
            WHEN ${column} > ${constants.gold_threshold} THEN "gold"
            WHEN ${column} > ${constants.silver_threshold} THEN "silver"
        ELSE
            "bronze"
        END`;
}


// Using defined vars
function customerSegment2(column) {
    return `
        CASE
            WHEN ${column} > ${dataform.projectConfig.vars.platinum_threshold} THEN "platinum"
            WHEN ${column} > ${dataform.projectConfig.vars.gold_threshold} THEN "gold"
            WHEN ${column} > ${dataform.projectConfig.vars.silver_threshold} THEN "silver"
        ELSE
            "bronze"
        END`;
}

module.exports = { customerSegment, customerSegment2 };