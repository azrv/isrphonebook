const OPTIONS = { hour: 'numeric', hour12: true }

const formatDate = (date) => {
  return date.toLocaleString('en-US', OPTIONS)
};

export default formatDate;