import React from 'react'
import './NewSkillForm.css'
import { useState } from 'react'


function NewSkillForm({addSkill}) {
    const [newSkill, setNewSkill] = useState ({
        name: '',
        level: 3
    })

    function handleAddSkill(evt) {
        evt.preventDefault();
        addSkill(newSkill);
        setNewSkill({name: '', level: 3});
    }

    function handleChange(evt) {
        setNewSkill({...newSkill, [evt.target.name]: evt.target.value})
          
    }

    return (
        <>

        <form className='NewSkillForm' onSubmit={handleAddSkill}> 
        <label htmlFor="Skill">Input</label> 
        <input id="Skill" type="text" value={newSkill.name} name="name" onChange={handleChange} />
        <label htmlFor="Level"></label> 
        <select value={newSkill.level} name="level" onChange={handleChange} >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
        
        <button type="submit">Add Skill</button>
        </form>
            
        </>
    )
}


export default NewSkillForm