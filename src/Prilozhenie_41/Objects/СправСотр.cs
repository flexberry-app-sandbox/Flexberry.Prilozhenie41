﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Prilozhenie_41
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// СправСотр.
    /// </summary>
    // *** Start programmer edit section *** (СправСотр CustomAttributes)

    // *** End programmer edit section *** (СправСотр CustomAttributes)
    [AutoAltered()]
    [Caption("Справочник Сотрудники")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СправСотрE", new string[] {
            "Фио as \'Сотрудник\'",
            "СправДолж as \'Должность\'",
            "СправДолж.Должность as \'Должность\'"}, Hidden=new string[] {
            "СправДолж.Должность"})]
    [View("СправСотрL", new string[] {
            "Фио as \'Сотрудник\'",
            "СправДолж.Должность as \'Должность\'"})]
    public class СправСотр : ICSSoft.STORMNET.DataObject
    {
        
        private string fФио;
        
        private IIS.Prilozhenie_41.СправДолж fСправДолж;
        
        // *** Start programmer edit section *** (СправСотр CustomMembers)

        // *** End programmer edit section *** (СправСотр CustomMembers)

        
        /// <summary>
        /// Фио.
        /// </summary>
        // *** Start programmer edit section *** (СправСотр.Фио CustomAttributes)

        // *** End programmer edit section *** (СправСотр.Фио CustomAttributes)
        [StrLen(255)]
        public virtual string Фио
        {
            get
            {
                // *** Start programmer edit section *** (СправСотр.Фио Get start)

                // *** End programmer edit section *** (СправСотр.Фио Get start)
                string result = this.fФио;
                // *** Start programmer edit section *** (СправСотр.Фио Get end)

                // *** End programmer edit section *** (СправСотр.Фио Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СправСотр.Фио Set start)

                // *** End programmer edit section *** (СправСотр.Фио Set start)
                this.fФио = value;
                // *** Start programmer edit section *** (СправСотр.Фио Set end)

                // *** End programmer edit section *** (СправСотр.Фио Set end)
            }
        }
        
        /// <summary>
        /// СправСотр.
        /// </summary>
        // *** Start programmer edit section *** (СправСотр.СправДолж CustomAttributes)

        // *** End programmer edit section *** (СправСотр.СправДолж CustomAttributes)
        [PropertyStorage(new string[] {
                "СправДолж"})]
        [NotNull()]
        public virtual IIS.Prilozhenie_41.СправДолж СправДолж
        {
            get
            {
                // *** Start programmer edit section *** (СправСотр.СправДолж Get start)

                // *** End programmer edit section *** (СправСотр.СправДолж Get start)
                IIS.Prilozhenie_41.СправДолж result = this.fСправДолж;
                // *** Start programmer edit section *** (СправСотр.СправДолж Get end)

                // *** End programmer edit section *** (СправСотр.СправДолж Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СправСотр.СправДолж Set start)

                // *** End programmer edit section *** (СправСотр.СправДолж Set start)
                this.fСправДолж = value;
                // *** Start programmer edit section *** (СправСотр.СправДолж Set end)

                // *** End programmer edit section *** (СправСотр.СправДолж Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СправСотрE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СправСотрE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СправСотрE", typeof(IIS.Prilozhenie_41.СправСотр));
                }
            }
            
            /// <summary>
            /// "СправСотрL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СправСотрL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СправСотрL", typeof(IIS.Prilozhenie_41.СправСотр));
                }
            }
        }
    }
}
