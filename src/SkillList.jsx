import SkillListItem from './SkillListItem';
import './SkillList.css'


function SkillList({skills}) {
    const skillListItems = skills.map((skill, idx) => (<SkillListItem skill={skill} key={idx} index={idx} />));

    return (
        <ul className='SkillList'>
            {skillListItems}

        </ul>
    )
}

export default SkillList;