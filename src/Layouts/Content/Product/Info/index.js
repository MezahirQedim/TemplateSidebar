import React from "react";
import { Modal, CloseButton } from "react-bootstrap";

const Info = ({ show, setShow,}) => {

    const [title, setTitle] = React.useState("")
    const [img, setImg] = React.useState("")
    const [desc, setDesc] = React.useState("")

//   const requestEmpolyee = async () => {
//     const link = "https://fakestoreapi.com/products/" + id
//     const res = await fetch(link);
//     if (res.ok && res.status === 200) {
//       const data = await res.json();
//         setTitle(data.title)
//         setImg(data.image)
//         setDesc(data.description)
//     }
//   };


//   console.log("title", title)

//   React.useEffect(() => {
//     requestEmpolyee();
//   }, [show]);

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header>
        Info
        <CloseButton onClick={() => setShow(false)} />
      </Modal.Header>
      <Modal.Body>
        <div className="form-control">
            <img className="form-control" src={img} />
          <label>Title</label>
          <input className="form-control"  value={title}/>
          <label className="mt-2">Description</label>
          <textarea rows="10" className="form-control mt-1"  value={desc}/>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Info;
