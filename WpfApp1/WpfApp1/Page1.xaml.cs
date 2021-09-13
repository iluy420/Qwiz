using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfApp1
{
    /// <summary>
    /// Логика взаимодействия для Page1.xaml
    /// </summary>
    public class gg//счетчик
    {
        public static int coun { get; set; } = 0;// переменная счетчика
    }
    public partial class Page1 : Page
    {
        public Page1()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            if(opoi.IsChecked == true)
            {
                gg.coun++; // обращение к статическому полю класса gg(счетчик) +1 
            }
            NavigationService.Navigate(new Page2());
        }

       
    }
}
