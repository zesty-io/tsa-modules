export const Example = () => {
  return `
    <style>
    .example {
        background-color: var(--color-base-light);
        display: flex;
        flex-direction: column;
        align-items: center;
    
        & tsa-text,
        tsa-title{
            text-align: center;
        }
    
        & .example__cta {
            & > button{
                margin: 0 auto;
                display: block;
            }

            & :last-child {
                margin-top: 2rem;
            }
        }
    
        &>* {
            margin-bottom: 3rem;
        }
    
        & :last-child {
            margin-bottom: 0;
        }
    }
    </style>

    <tsa-card class="example">
        <tsa-title>[FPO] First Title</tsa-title>
        <tsa-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.</tsa-text>
        <div class="example__cta">
            <button type="button" class="btn btn--small btn--dark--fill">[FPO] Primary Button</button>
            <button type="button" class="btn btn--small btn--dark--outline">[FPO] Secondary Button</button>
        </div>
        <div class="example__image">
            <img src="https://mgfrnv8q.media.zestyio.com/Vector.png" alt="sample image" />
        </div>
    </tsa-card>
    `;
};
