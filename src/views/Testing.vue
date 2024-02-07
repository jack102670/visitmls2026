<template>
  <div id="htmlTemplate">

    <h2> HELLOO. TRYY</h2>
  </div>
    <button @click="generatePDF()">Generate PDF</button>
  
</template>

<script>
import jsPDF from "jspdf";
import "jspdf-autotable";
//import html2canvas from "html2canvas";

export default {
  name: "PdfGenerator",
  methods: {
    async generatePDF() {
      const doc = new jsPDF();

      const htmlContent = document.getElementById('htmlTemplate');

      doc.html(htmlContent, {
      callback: function (doc) {
        doc.save("output.pdf");
      },
      x: 10,
      y: 10,
      html2canvas: { scale: 0.5 } // You can adjust the scale according to your needs
    });

      // // Fake data for tableRows (replace with your actual data structure)
      // const tableRows = [
      //   [
      //     1,
      //     "Monthly accounting services",
      //     "$150.00",
      //     1,
      //     "20%",
      //     "$150.00",
      //     "$180.00",
      //   ],
      //   [
      //     2,
      //     "Taxation consulting (hour)",
      //     "$60.00",
      //     2,
      //     "20%",
      //     "$120.00",
      //     "$144.00",
      //   ],
      //   [3, "Bookkeeping services", "$50.00", 1, "20%", "$50.00", "$60.00"],
      // ];

      // // Add a logo and brand name at the top
      // // You'll need to have the logo available as a base64 string or as an accessible URL
      // // doc.addImage(logoData, 'PNG', 15, 10, 30, 10);

      // doc.setFontSize(18); // Larger font for the brand name
      // doc.text("Brand", 190, 20, null, null, "right");

      // // Supplier and customer information
      // doc.setFontSize(10); // Reset font size for regular text
      // doc.text(
      //   "Supplier Company INC\nNumber: 23456789\nVAT: 23456789\n6622 Abshire Mills\nPort Orlofurt, 05820\nUnited States",
      //   15,
      //   30
      // );

      // doc.text("Date\nApril 26, 2023", 150, 30);
      // doc.text("Invoice #\nBRA-00335", 150, 40);

      // doc.text(
      //   "Customer Company\nNumber: 123456789\nVAT: 23456789\n9552 Vandervort Spurs\nParadise, 43325\nUnited States",
      //   150,
      //   50,
      //   null,
      //   null,
      //   "right"
      // );

      // // Product details table
      // doc.autoTable({
      //   startY: 80,
      //   head: [
      //     [
      //       "#",
      //       "Product details",
      //       "Price",
      //       "Qty.",
      //       "VAT",
      //       "Subtotal",
      //       "Subtotal + VAT",
      //     ],
      //   ],
      //   body: tableRows,
      //   theme: "grid",
      //   headStyles: {
      //     fillColor: [0, 0, 0],
      //     textColor: [255, 255, 255],
      //     fontStyle: "bold",
      //   },
      //   styles: {
      //     overflow: "linebreak",
      //   },
      //   margin: { top: 30 },
      // });

      // // Payment details
      // // Total calculations
      // let finalY = doc.autoTable.previous.finalY + 20; // Position for total calculations
      // doc.setFontSize(12);
      // doc.text("Net total: $320.00\nVAT total: $64.00", 15, finalY);
      // doc.setFont("helvetica", "bold"); // Updated method to set font style
      // doc.text("Total: $384.00", 15, finalY + 10);

      // // Save the PDF
      // doc.save("invoice.pdf");
    },
  },
};
</script>
