import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from "../styles/Main.module.css";

function Main() {
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('파일 선택됨:', event.target.files);
    };

    return (
        <>
            <Helmet>
                <title>나와 닮은 원식 케릭터 찿기</title>
                <meta property="og:title" content="나와 닮은 원식 케릭터 찿기" />
                <meta property="og:description" content="나와 닮은 원신 케릭터를 찿아보세요!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="icon.png" />
            </Helmet>

            <div className={styles.container}>
                <div>
                    <h1 className={styles.message}>나와 닮은 원식 케릭터 찿기</h1>
                    <h2 className={styles.title}>나와 닮은 원신 케릭터를 찿아보세요!</h2>
                </div>
                <img src="icon.png" alt="logo" className={styles.logo} />

                <div className={styles.container_2}>
                    <label htmlFor="fileUpload" className={styles.image_upload}>
                        <input
                            type="file"
                            id="fileUpload"
                            onChange={handleFileUpload}
                            accept="image/*"
                            className={styles.file_upload_input}
                        />
                        <h2 className={styles.upload_text}>사진을 올려놓거나 눌러서 업로드</h2>
                    </label>
                </div>
            </div>
        </>
    );
}

export default Main;




