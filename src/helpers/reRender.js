export const reRender = async (content,id) => {
    document.querySelector('#content').innerHTML = await content.render(id);
     // Sau khi content đã render xong thì afterRender mới được chạy
     if (content.afterRender) {
        content.afterRender();

    }
}