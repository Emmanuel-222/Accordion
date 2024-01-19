import PropTypes from 'prop-types';
import './AccordionItem.css';


const AccordionItem = ({item, index, selectedItem, onSelectedItem}) => {
  const handleToggle = index => {
    onSelectedItem(index === selectedItem ? null : index)
  }

  return (
      <div className="item" key={index}>
        <div className="question" onClick={() => handleToggle(index)}>
            <h2>
                {item.question}
            </h2>
            <span className="icon">
                {selectedItem === index ? '-' :'+' }
            </span>
        </div>
        <div className={selectedItem === index ? 'answer show' : 'answer'}
        >
            {item.answer}
        </div>
    </div>
  )
}

AccordionItem.propTypes = {
    item: PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    selectedItem: PropTypes.number,
    onSelectedItem: PropTypes.func
  };

export default AccordionItem;
