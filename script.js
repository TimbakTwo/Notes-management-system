alert('test');

// Create a new script element
const script = document.createElement('script');

// Define the script content to update the text content of the specified element
script.textContent = `
  // Function to update the text content of the specified element
  function updateTextContent() {
    const element = document.querySelector("#mount_0_0_qa > div > div:nth-child(1) > div > div:nth-child(6) > div.x1ey2m1c.xds687c.xixxii4 > div.xuk3077.x78zum5.xc8icb0 > div.x1ey2m1c.x78zum5.x164qtfw.xixxii4.x1vjfegm > div:nth-child(1) > div > div > div > div > div > div > div.x78zum5.xdt5ytf.x1iyjqo2.x193iq5w.x2lwn1j.x1n2onr6 > div:nth-child(2) > div > div > div.html-div.xe8uvvx.xdj266r.xat24cr.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16sw7j7.x107yiy2.xv8uw2v.x1tfwpuw.x2g32xy.x178xt8z.xm81vs4.xso031l.xy80clv.x1w0mnb.x1mnrxsn.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x13qp9f6.x6ikm8r.x10wlt62 > div > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x193iq5w.x1iyjqo2.xs83m0k.x1l7klhg.xamitd3.x12nagc.x1w0mnb.x1mnrxsn.x1gslohp.xctk3hg.x900493.x1odjw0f.xexx8yu.x4uap5.x18d9i69.xkhd6sd > div > p > span");
    if (element) {
      element.textContent = "Updated text";
    } else {
      console.error("Element not found");
    }
  }

  // Call the function to update the text content
  updateTextContent();
`;

// Append the script to the document head to execute it
document.head.appendChild(script);
