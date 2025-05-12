
export const handleOpenEmailClick = (email: string) => {
    if (email) {
        window.location.href = `mailto:${email}?subject=Hello&body=I wanted to contact you.`;
    }
  };