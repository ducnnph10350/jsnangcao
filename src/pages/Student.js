import { getStudents } from "../api/student";
import { deleteStudent } from "../api/student";
import { reRender } from '../helpers/reRender'

const Student = {
    render: async () => { // đã đóng ngoặc nhọn phải có return ở trong
        // 1. fetch là phương thức dùng để lấy dữ liệu từ phía BE
        // 2. fetch trả về 1 Promise => sẽ có await ở trước fetch để chờ kq
        // 3. fetch nhận vào đường dẫn API endpoint của BE
        // const response = await fetch('https://629345a1089f87a57abd33d9.mockapi.io/students');
        //3.2 su dung axios da duoc khoi tao va sinh ra ham getStudents
        const response = await getStudents();
        const {data} = response;
        console.log(data);
        // 4. lần đợi fetch đầu tiên  sẽ trả về obj Response
        // console.log('response',response);
        // 5. lần đợi tiếp theo là response trả dữ liệu về dạng json
        // const students = await response.json();
        // console.log('students', students);
        
        return `<div>
            ${
                data.map((student) => (
                    `<div>
                        <div>ID: ${student.id}</div>
                        <div>Name: ${student.name}</div>
                        <div>MSV: ${student.msv}</div>
                        <div>
                            <a href="/students/${student.id}"
                                <button>chi tiet</button>
                            </a>
                        </div>
                        <div>
                           
                                <button class='btn btn-danger' data-name="${student.name}" data-id="${student.id}" ">Xoa</button>
                            </a>
                        </div>
                    </div>`
                )).join('')
            }
        </div>`
    },
    afterRender: () => {

        const deleteBtns =document.querySelectorAll('.btn-danger');
        deleteBtns.forEach((btn) => {
            // const data=btn.dataset;
            btn.addEventListener('click', async () => {
                const btnId = btn.dataset.id;
                //thuc hien xoa
                console.log(btnId);
                await deleteStudent(btnId);
                await reRender(Student);
                
            })
        })
    }
};

export default Student;