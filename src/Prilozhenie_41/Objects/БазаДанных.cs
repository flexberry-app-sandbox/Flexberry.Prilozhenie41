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
    /// БазаДанных.
    /// </summary>
    // *** Start programmer edit section *** (БазаДанных CustomAttributes)

    // *** End programmer edit section *** (БазаДанных CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("БазаДанныхE", new string[] {
            "НомерКарты as \'Номер Карты\'",
            "СправУч as \'Ученик\'",
            "СправУч.Фио as \'Фио Ученика\'"})]
    [MasterViewDefineAttribute("БазаДанныхE", "СправУч", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фио Ученика")]
    public class БазаДанных : ICSSoft.STORMNET.DataObject
    {
        
        private string fНомерКарты;
        
        private IIS.Prilozhenie_41.СправУч fСправУч;
        
        private IIS.Prilozhenie_41.КартДоступ fКартДоступ;
        
        // *** Start programmer edit section *** (БазаДанных CustomMembers)

        // *** End programmer edit section *** (БазаДанных CustomMembers)

        
        /// <summary>
        /// НомерКарты.
        /// </summary>
        // *** Start programmer edit section *** (БазаДанных.НомерКарты CustomAttributes)

        // *** End programmer edit section *** (БазаДанных.НомерКарты CustomAttributes)
        [StrLen(255)]
        public virtual string НомерКарты
        {
            get
            {
                // *** Start programmer edit section *** (БазаДанных.НомерКарты Get start)

                // *** End programmer edit section *** (БазаДанных.НомерКарты Get start)
                string result = this.fНомерКарты;
                // *** Start programmer edit section *** (БазаДанных.НомерКарты Get end)

                // *** End programmer edit section *** (БазаДанных.НомерКарты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (БазаДанных.НомерКарты Set start)

                // *** End programmer edit section *** (БазаДанных.НомерКарты Set start)
                this.fНомерКарты = value;
                // *** Start programmer edit section *** (БазаДанных.НомерКарты Set end)

                // *** End programmer edit section *** (БазаДанных.НомерКарты Set end)
            }
        }
        
        /// <summary>
        /// БазаДанных.
        /// </summary>
        // *** Start programmer edit section *** (БазаДанных.СправУч CustomAttributes)

        // *** End programmer edit section *** (БазаДанных.СправУч CustomAttributes)
        [PropertyStorage(new string[] {
                "СправУч"})]
        [NotNull()]
        public virtual IIS.Prilozhenie_41.СправУч СправУч
        {
            get
            {
                // *** Start programmer edit section *** (БазаДанных.СправУч Get start)

                // *** End programmer edit section *** (БазаДанных.СправУч Get start)
                IIS.Prilozhenie_41.СправУч result = this.fСправУч;
                // *** Start programmer edit section *** (БазаДанных.СправУч Get end)

                // *** End programmer edit section *** (БазаДанных.СправУч Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (БазаДанных.СправУч Set start)

                // *** End programmer edit section *** (БазаДанных.СправУч Set start)
                this.fСправУч = value;
                // *** Start programmer edit section *** (БазаДанных.СправУч Set end)

                // *** End programmer edit section *** (БазаДанных.СправУч Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Prilozhenie_41.КартДоступ.
        /// </summary>
        // *** Start programmer edit section *** (БазаДанных.КартДоступ CustomAttributes)

        // *** End programmer edit section *** (БазаДанных.КартДоступ CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "КартДоступ"})]
        public virtual IIS.Prilozhenie_41.КартДоступ КартДоступ
        {
            get
            {
                // *** Start programmer edit section *** (БазаДанных.КартДоступ Get start)

                // *** End programmer edit section *** (БазаДанных.КартДоступ Get start)
                IIS.Prilozhenie_41.КартДоступ result = this.fКартДоступ;
                // *** Start programmer edit section *** (БазаДанных.КартДоступ Get end)

                // *** End programmer edit section *** (БазаДанных.КартДоступ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (БазаДанных.КартДоступ Set start)

                // *** End programmer edit section *** (БазаДанных.КартДоступ Set start)
                this.fКартДоступ = value;
                // *** Start programmer edit section *** (БазаДанных.КартДоступ Set end)

                // *** End programmer edit section *** (БазаДанных.КартДоступ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "БазаДанныхE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View БазаДанныхE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("БазаДанныхE", typeof(IIS.Prilozhenie_41.БазаДанных));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of БазаДанных.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfБазаДанных CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfБазаДанных CustomAttributes)
    public class DetailArrayOfБазаДанных : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Prilozhenie_41.DetailArrayOfБазаДанных members)

        // *** End programmer edit section *** (IIS.Prilozhenie_41.DetailArrayOfБазаДанных members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type БазаДанных by index.
        /// </summary>
        /// <summary>
        /// Adds object with type БазаДанных.
        /// </summary>
        public DetailArrayOfБазаДанных(IIS.Prilozhenie_41.КартДоступ fКартДоступ) : 
                base(typeof(БазаДанных), ((ICSSoft.STORMNET.DataObject)(fКартДоступ)))
        {
        }
        
        public IIS.Prilozhenie_41.БазаДанных this[int index]
        {
            get
            {
                return ((IIS.Prilozhenie_41.БазаДанных)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Prilozhenie_41.БазаДанных dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
