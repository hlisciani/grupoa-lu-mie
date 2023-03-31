function ListadoUsuariosComponent(props) {
    let html = `<table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                  </tr>
                                </thead>
                                <tbody>
                                ${props.map(x=>UserRow(x))}
                                </tbody>
                              </table>` ;
    document.getElementById('userList').innerHTML = html ;
}
function UserRow(user) {
        const html = `<tr>
                <th scope="row">${user.id}</th>
                <td>${user.first_name}</td>
                <td>${user.email}</td>
                <td>
                    <img src="${user.avatar}">
                </td>
                </tr>` ;

    return html ;
}