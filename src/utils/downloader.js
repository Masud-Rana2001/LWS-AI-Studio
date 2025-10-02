  const downloader = async (url,index) => {
    if (!url) return;

    try {
      const response = await fetch(url);
      const blob = await response.blob();

      // Create object URL
      const ObjUrl = URL.createObjectURL(blob);

      // Create link element
      const link = document.createElement("a");
      link.href = ObjUrl;

      // unique filename (ex: generated-image-1.jpg)
      link.download = `generated-image-${index + 1}.jpg`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // cleanup
      URL.revokeObjectURL(ObjUrl);
    } catch (error) {
      console.error("Image download failed:", error);
    }
};
  
export default downloader