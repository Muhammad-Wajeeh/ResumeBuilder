function Toolbar({ resumeData }) {
    function handlePrint() {
      window.print();
    }
  
    return (
      <div className="toolbar">
        <button onClick={handlePrint}>Print Resume</button>
        <button onClick={() => alert("Exporting to PDF...")}>Export PDF</button>
      </div>
    );
  }
  
  export default Toolbar;
  