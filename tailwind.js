tailwind.config = {    
    theme: {       
        extend: {
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                  },

            },
            animation: {
                scroll: 'scroll 2s linear infinite',
              },
            screen: {
                
                

            },            
            colors: {
                'custom-color': '#DF6951',
                'star': '#A4074D',
                'learn': '#A4074D',
                'bordure':'#F9FCFF',
                'trusted':'#EBEFF6',
                'button':'#F4F4F4',
            },
           
            boxShadow: {
                bs:"2px 10px 12px 12px rgba(0,0,0,5)"
            },
            borderWidth: {
                bw:"8px" ,
            },
            borderColor: {
                bc:"#996600"
            },
            borderRadius: {
                brd: "40px",
                brdf: "9999px",
            }
        }
    }
};