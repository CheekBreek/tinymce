import React, { useState, useEffect } from 'react';
import { Editor } from 'tinymce';

const App = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const savedContent = localStorage.getItem('tinymce');
    //console.log(savedContent);
    if (savedContent) {
      console.log(savedContent);
      setContent(savedContent);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tinymce', localStorage.getItem('tinymcedraft'));
    //console.log(content);
  }, [content]);

  return (
    <Editor
      apiKey="nmp2l62jyi8ukrshdzdg336w5z8up108ze71v711ttit356f"
      initialValue={localStorage.getItem('tinymcedraft')}
      init={{
        height: 1000,
        menubar: true,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
          'autosave',
        ],
        autosave_ask_before_unload: false,
        autosave_interval: '5s',
        autosave_prefix: 'tinymce',
        autosave_restore_when_empty: true,
        autosave_retention: '30m',
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help | restoredraft',
      }}
    />
  );
};

export default App;