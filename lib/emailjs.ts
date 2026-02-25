import emailjs from '@emailjs/browser';

// Configuração do EmailJS
const EMAILJS_PUBLIC_KEY = '_wZhPZxRB1dSg1jct';
const EMAILJS_SERVICE_ID = 'service_z9edre4';
const EMAILJS_TEMPLATE_ID = 'template_g155jji';

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; error?: string }> => {
  try {
    // Inicializar o EmailJS dinamicamente antes de enviar
    emailjs.init(EMAILJS_PUBLIC_KEY);
    
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
        to_name: 'Renato Torres',
      }
    );
    
    console.log('EmailJS Response:', response);
    return { success: response.status === 200 };
  } catch (error: any) {
    console.error('Erro ao enviar email:', error);
    
    // Tratamento específico para erros comuns
    if (error.status === 412) {
      return { 
        success: false, 
        error: 'Erro de configuração do EmailJS. Verifique suas chaves e configurações.' 
      };
    } else if (error.status === 400) {
      return { 
        success: false, 
        error: 'Dados do formulário inválidos. Verifique todos os campos.' 
      };
    } else {
      return { 
        success: false, 
        error: `Falha ao enviar email: ${error.text || 'Erro desconhecido'}` 
      };
    }
  }
};
