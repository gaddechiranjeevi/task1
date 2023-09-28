import { useState } from "react"
import jsPDF from "jspdf";

const Payslip = () => {
    const [name, setname] = useState('');
    const [employeeNo, setEmployeeno] = useState('');
    const [joindate, setjoindate] = useState('');
    const [left, setleft] = useState('');
    const [status, setstatus] = useState('');
    const [daysinmonth, setdaysinmonth] = useState('');
    const [lop, setlop] = useState('');
    const [workdays, setworkdays] = useState('');
    const [eladdition, setEladdition] = useState('');
    const [basic, setbasic] = useState('');
    const [da, setda] = useState('');
    const [hra, sethra] = useState('');
    const [medicalallowance, setmedicalallowance] = useState('');
    const [transportallowance, settransportallowance] = useState('');
    const [specialallowance, setspecialallowance] = useState('');
    const [otherearnings, setotherearnings] = useState('');
    const [leaveencashment, setleaveencashment] = useState('');
    const [nightshiftallowance, setnightshiftallowance] = useState('');
    const [gratuity, setgratuity] = useState('');
    const [gross, setgross] = useState('');
    const [pf, setpf] = useState('');
    const [vpf, setvpf] = useState('');
    const [incometax, setincometax] = useState('');
    const [proftax, setproftax] = useState('');
    const [totaldeductions, settotaldeductions] = useState('');
    const [netpay, setnetpay] = useState('');

    const Handlesubmit = () => {
        generatePDF();
    }

    const generatePDF = (index) => {
        // Create new jsPDF instance
        const pdf = new jsPDF();


        // Add table to PDF

        pdf.setFontSize(15);
        pdf.setFont(undefined, 'bold');
        pdf.setTextColor('#000000');

        // Add invoice title
        pdf.setLineWidth(0.5);
        pdf.line(10, 10, 200, 10).setFillColor('#000000');
        pdf.line(10, 225, 10, 10).setFillColor('#000000');
        pdf.line(200, 10, 200, 225).setFillColor('#000000');
        pdf.text('Mantra Technologies Pvt. Ltd.', 105, 20, null, null, 'center');
        pdf.setFont(undefined, 'normal');
        pdf.setFontSize(8);
        pdf.text('1st Floor, Vertex Corporate Bldg. Jubilee Enclave, HITEX Madhapur, Hyderabad-500081. P: (040) 29800028', 110, 27, null, null, 'center');
        pdf.setFont(undefined, 'bold');
        pdf.setFontSize(15);
        pdf.text('Payslip for the month of July 2023', 105, 35, null, null, 'center');
        pdf.setLineWidth(0.5);
        pdf.line(10, 40, 200, 40).setFillColor('#007bff');

        // Set styles for billed to/company details
        pdf.setFontSize(12);

        pdf.setTextColor('#000000');
        pdf.setFont(undefined, 'normal');
        pdf.text('Name:', 13, 50);
        pdf.text(`Join Date:`, 13, 60);
        pdf.text(`Designation:`, 13, 70);
        pdf.text(`Department`, 13, 80)
        pdf.text(`Location:`, 13, 90);
        pdf.text(`Effective Work Days:`, 13, 100);
        pdf.text(`Days In Month:`, 13, 110);
        pdf.text('Bank Name', 110, 50);
        pdf.text('Bank Account No:', 110, 60);
        pdf.text('PF No:', 110, 70);
        pdf.text('PF UAN:', 110, 80);
        pdf.text('ESI No:', 110, 90);
        pdf.text('PAN No:', 110, 100);
        pdf.text('LOP:', 110, 110);

        pdf.setLineWidth(0.5);
        pdf.line(108, 210, 108, 40).setFillColor('#000000');
        pdf.setFont(undefined, 'bold');

        pdf.text(`${name} [${employeeNo}]`, 55, 50);
        pdf.text(`${joindate}`, 55, 60);
        pdf.text(`DEVELOPER`, 55, 70);
        pdf.text(`ENGINEERING`, 55, 80)
        pdf.text(`HYDERABAD`, 55, 90);
        pdf.text(`${workdays}`, 55, 100);
        pdf.text(`${daysinmonth}`, 55, 110);
        pdf.text('STATE OF INDIA', 150, 50);
        pdf.text('32436226781', 150, 60);
        pdf.text('8762344412', 150, 70);
        pdf.text('SILJK8192', 150, 80);
        pdf.text('293381262', 150, 90);
        pdf.text('CIWEK0023K', 150, 100);
        pdf.text(`${lop}`, 150, 110);
        // Set styles for invoice table

        pdf.line(10, 115, 200, 115);
        pdf.setFont(undefined, 'bold');
        pdf.text('Earnings', 13, 125);
        pdf.text('Actual', 75, 125);
        pdf.text('Deductions', 110, 125);
        pdf.text('Actual', 180, 125);
        pdf.line(10, 130, 200, 130);

        pdf.setFont(undefined, 'normal');
        pdf.text(`BASIC`, 13, 140);
        pdf.text(`HRA`, 13, 150);
        pdf.text(`MEDICAL ALLOWANCE`, 13, 160);
        pdf.text(`TRANSPORT ALLOWANCE`, 13, 170);
        pdf.text(`SPECIAL ALLOWANCE`, 13, 180);
        pdf.text(`PF`, 112, 140);
        pdf.text(`PROF TAX`, 112, 150);

        pdf.setFont(undefined, 'bold');
        pdf.text(`${basic}.00`, 75, 140);
        pdf.text(`${hra}.00`, 75, 150);
        pdf.text(`${medicalallowance}.00`, 75, 160, 'left');
        pdf.text(`${transportallowance}.00`, 75, 170);
        pdf.text(`${specialallowance}.00`, 75, 180);
        pdf.text(`${pf}.00`, 180, 140);
        pdf.text(`${proftax}.00`, 180, 150);

        pdf.setFont(undefined, 'normal');
        pdf.setLineWidth(0.5);
        pdf.line(10, 190, 200, 190);
        pdf.text(`Total Earnings:INR ${parseInt(basic) + parseInt(hra) + parseInt(medicalallowance) + parseInt(transportallowance) + parseInt(specialallowance)}`, 13, 200);
        pdf.text(`Total Deductions: ${parseInt(pf) + parseInt(proftax)}`, 112, 200);

        pdf.setLineWidth(0.5);
        pdf.line(10, 210, 200, 210);

        pdf.setFontSize(7);
        pdf.text('Net Pay for the month (Total Earnings - Total Deductions):', 13, 215);
        pdf.text(`${parseInt(basic) + parseInt(hra) + parseInt(medicalallowance) + parseInt(transportallowance) + parseInt(specialallowance)}`, 13, 220);

        pdf.setLineWidth(0.5);
        pdf.line(10, 225, 200, 225);

        pdf.setFontSize(8);
        pdf.text('This is a system generated payslip and does not require signature', 65, 230);

        pdf.save('Payslip.pdf');
    };
    // pdf generation code ends here ///

    return (
        <div className="box">
            <div>
                <header>PaySlip Generator</header>
                <label>Name</label><input type="text" value={name} onChange={(e) => { setname(e.target.value) }} />
                EmployeeNo<input type="text" value={employeeNo} onChange={(e) => { setEmployeeno(e.target.value) }} />
                Join Date<input type="date" value={joindate} onChange={(e) => { setjoindate(e.target.value) }} />
                Left?<select onChange={(e) => { setleft(e.target.value) }}>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                Status<input type="text" value={status} onChange={(e) => { setstatus(e.target.value) }} />
                DAYS IN MONTH<input type="number" value={daysinmonth} onChange={(e) => { setdaysinmonth(e.target.value) }} />
                LOP<input type="text" value={lop} onChange={(e) => { setlop(e.target.value) }} />
                EMP EFFECTIVE WORKDAYS<input type="number" value={workdays} onChange={(e) => { setworkdays(e.target.value) }} />
                ElAddition<input type="text" value={eladdition} onChange={(e) => { setEladdition(e.target.value) }} />
                BASIC<input type="text" value={basic} onChange={(e) => { setbasic(e.target.value) }} />
                DA<input type="text" value={da} onChange={(e) => { setda(e.target.value) }} />
                HRA<input type="text" value={hra} onChange={(e) => { sethra(e.target.value) }} />
                MEDICAL ALLOWANCE<input type="text" value={medicalallowance} onChange={(e) => { setmedicalallowance(e.target.value) }} />
                TRANSPORT ALLOWANCE<input type="text" value={transportallowance} onChange={(e) => { settransportallowance(e.target.value) }} />
                SPECIAL ALLOWANCE<input type="text" value={specialallowance} onChange={(e) => { setspecialallowance(e.target.value) }} />
                OTHER EARNING<input type="text" value={otherearnings} onChange={(e) => { setotherearnings(e.target.value) }} />
                LEAVE ENCASHMENT<input type="text" value={leaveencashment} onChange={(e) => { setleaveencashment(e.target.value) }} />
                NIGHTSHIFT ALLOWANCE<input type="text" value={nightshiftallowance} onChange={(e) => { setnightshiftallowance(e.target.value) }} />
                GRATUITY<input type="text" value={gratuity} onChange={(e) => { setgratuity(e.target.value) }} />
                GROSS<input type="text" value={gross} onChange={(e)=>{setgross(e.target.value)}} />
                PF<input type="text" value={pf} onChange={(e) => { setpf(e.target.value) }} />
                VPF<input type="text" value={vpf} onChange={(e) => { setvpf(e.target.value) }} />
                INCOMETAX<input type="text" value={incometax} onChange={(e) => { setincometax(e.target.value) }} />
                PROF TAX<input type="text" value={proftax} onChange={(e) => { setproftax(e.target.value) }} />
                TOTAL DEDUCTIONS<input type="text" value={parseInt(pf)+parseInt(proftax)} onChange={(e) => { settotaldeductions(e.target.value) }} />
                NETPAY<input type="text" value={parseInt(gross)-parseInt(pf)-parseInt(proftax)} onChange={(e) => { setnetpay(e.target.value) }} />
            </div>
            <div className="btn">
                <button onClick={Handlesubmit}>Generate Payslip</button>
            </div>
        </div>
    )
}

export default Payslip;