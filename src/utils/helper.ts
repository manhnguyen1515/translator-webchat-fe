export const validateEmail = (email: string) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
};

export const randomColor = () => {
 return "#" + Math.floor(Math.random()*16777215).toString(16);
}    