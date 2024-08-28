const imageTobase64 = async (image) => {

    const reader = new FileReader()
    reader.readAsDataURL(image)

    const data = await new Promise((resolve , reject) => {
        reader.onload = () => resolve(reader.result)
        reader.oneerror = error => reject(error);
    })

    return data;

}

export default imageTobase64;