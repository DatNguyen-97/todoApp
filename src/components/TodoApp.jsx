import { useEffect, useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineMore, } from 'react-icons/ai';
import { GrAddCircle } from 'react-icons/gr';
import { IconContext } from 'react-icons/lib';
import { RxUpdate } from 'react-icons/rx';
import './css/TodoApp.css';
const TodoApp = () => {
    const getJobList = () =>{
        const jobList = JSON.parse(localStorage.getItem('jobs_item'))
        return jobList
    }

    const [list, setList] = useState(getJobList() ?? []);
    const [jobs, setJobs] = useState('')
    const [addBtnState, setAddBtn] = useState('block')
    const [updateBtnState, setUpdateBtn] = useState('none')
    const [indexEdit, setIndexEdit] = useState('')
    
    class Job {
        constructor(id, title,status,checked,statusItem,isShow) {
            this.id = id;
            this.title = title;
            this.status = status;
            this.checked = checked;
            this.statusItem = statusItem;
            this.isShow = isShow;
        }
    }

    const handleSubmit = () => {
        if(jobs === '') return
        const temp = new Job(list.length + 1, jobs, 'Pending',false,false,true)
        setList(prev => [...prev, temp])
        setJobs('')
    }

    const handleEdit = (index,e) => {
        console.log('edit')
        e.stopPropagation()
        setIndexEdit(index)
        setAddBtn('none')
        setUpdateBtn('block')
        setJobs(list[index].title)
    }

    const handleUpdate = () => {
        if(jobs === '') return
        setAddBtn('block')
        setUpdateBtn('none')
        const arr = [...list]
        arr[indexEdit].title = jobs
        setList(arr)
        setJobs('')
    }

    const handleChangeStatus = (index) => {
        const arr = [...list]
        const tempStatus = !arr[index].statusItem
        if(tempStatus) {
            arr[index].status = 'Completed'
            arr[index].statusItem = tempStatus
        }else {
            arr[index].status = 'Pending'
            arr[index].statusItem = !!tempStatus
        }
        setList(arr)

    }

    useEffect(() => {
        localStorage.setItem('jobs_item',JSON.stringify(list))
    },[list])

    const handleRemoveJob = (index,e) => {
        e.stopPropagation()
        const newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }

    const handleChecked = (checked,index,e) => {
        e.stopPropagation()
        const arr = [...list]
        const tempStatus = !checked
        arr[index].checked = tempStatus
        setList(arr)
    }

    const handleDeleteSelected = () => {
        const arr = [...list]
        const newList = arr.filter(todo => todo.checked === false)
        setList(newList)
    }

    const handleSearch = (value) => {
        console.log(value)
        const arr = [...list]
        const newList = arr.map((todo) => {
            if(!todo.title.includes(value)) {
                todo.isShow = false;
            }else {
                todo.isShow = true;
            }
            return todo
        })
        setList(newList)
    }
    
    return (
        <div className="wrapper">
            <div className="container">
                <header className="header">
                    <div className="appName">Todo App</div>
                    <div className="control">
                        <input value={jobs} onChange={e => setJobs(e.target.value)} className="inputText"></input>
                        <button onClick={handleSubmit} style={{display : addBtnState}} className="addBtn">
                            <IconContext.Provider value={{size : '30px'}}>
                                <GrAddCircle/>
                            </IconContext.Provider>
                        </button>
                        <button onClick={handleUpdate} style={{display : updateBtnState}} className="updateBtn">
                            <IconContext.Provider value={{size : '30px'}}>
                                <RxUpdate/>
                            </IconContext.Provider>
                        </button>
                        
                    </div>
                </header>
                <input onChange={(e) => handleSearch(e.target.value)} className="searchBar" type="text" placeholder="Search..."></input>
                <div className="content">
                    <div className="navBar">
                        <button onClick={handleDeleteSelected} className="deleteSelectBtn">
                        <IconContext.Provider value={{size : '24px',backgroundColor : 'transparent'}}>
                                <AiOutlineDelete/>
                            </IconContext.Provider>
                        </button>
                        <div className="title">Title</div>
                        <div className="statusTitle">Status</div>
                    </div>
                    <div className="listItem">
                        {
                            list?.map((todo,index) => {
                                return (
                                    <div className="item" onClick={() => handleChangeStatus(index)} style={{backgroundColor : todo.statusItem ? 'green' : 'yellow',display : todo.isShow ? 'flex' : 'none'}}>
                                        <input checked={todo.checked} onClick={(e) => handleChecked(todo.checked,index,e)} type="checkbox" className="checkItem"></input>
                                        <div className="desc" key={todo.id} style={{textDecoration : todo.statusItem ? 'line-through' : 'none'}}>{todo.title}</div>
                                        <div className="sub">
                                            <div className="status">{todo.status}</div>
                                            <div className="btnDetail">
                                                <IconContext.Provider value={{size : '18px'}}>
                                                    <AiOutlineMore/>
                                                </IconContext.Provider>
                                                <div className="subBtn">
                                                    <button onClick={(e) => handleEdit(index,e)} className="btnEdit">
                                                        <IconContext.Provider value={{size : '10px'}}>
                                                            <AiOutlineEdit/>
                                                        </IconContext.Provider>
                                                    </button>
                                                    <button onClick={(e) => handleRemoveJob(index,e)} className="btnDelete">
                                                        <IconContext.Provider value={{size : '10px'}}>
                                                            <AiOutlineDelete/>
                                                        </IconContext.Provider>
                                                    </button>
                                                </div>                                                
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) 
                        }
                    </div>
                    
                </div>
                <footer className="footer">
                    <div className="pendingStatus">You have {list.length} tasks</div>
                    <button onClick={() => setList([])} className="deleteAllBtn">Clear all</button>
                </footer>
            </div>
        </div>
    )
}

export default TodoApp