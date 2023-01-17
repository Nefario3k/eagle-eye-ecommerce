export default (app, inject) => {
    // run edits 
    inject('capitalizeFirstLetter', str => {
        // converting first letter to uppercase
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

        return capitalized;
    })

}